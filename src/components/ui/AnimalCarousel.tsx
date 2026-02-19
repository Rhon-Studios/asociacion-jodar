import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import styled from 'styled-components'
import AnimalCarouselCard from './AnimalCarouselCard'

type AnimalProps = {
  name: string
  description: string
  isDisponible: boolean
  url: string
}

const data: AnimalProps[] = [
    {
        id: 1,
        name: "Luna",
        shdescription: "Cariñosa y tranquila, ideal para hogares serenos.",
        description: "Luna es una gata muy dulce que disfruta pasar tiempo cerca de las personas. Le encanta tomar el sol junto a la ventana y recibir caricias. Se adapta perfectamente a pisos pequeños y es muy limpia y educada.",
        age: 3,
        sex: "hembra",
        status: "normal",
        images: [
            "https://images.unsplash.com/photo-1667518158994-8b3b2957dd01"
        ],
        priority: "normal",
        isAdopted: false
    },
    {
        id: 2,
        name: "Simón",
        shdescription: "Juguetón y curioso, siempre explorando.",
        description: "Simón es un gato macho muy activo y divertido. Le encanta jugar con pelotas y perseguir juguetes. Es sociable con otros gatos y sería ideal para una familia con niños.",
        age: 2,
        sex: "macho",
        status: "normal",
        images: [
            "https://images.unsplash.com/photo-1595433562696-54d9d1a0d1a7"
        ],
        priority: "alta",
        isAdopted: false
    },
    {
        id: 3,
        name: "Mimi",
        shdescription: "Pequeña y dulce, busca un hogar acogedor.",
        description: "Mimi es una gatita muy tranquila que disfruta dormir en lugares cómodos. Es algo tímida al principio, pero cuando gana confianza se vuelve muy cariñosa.",
        age: 1,
        sex: "hembra",
        status: "reservado",
        images: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
        ],
        priority: "urgente",
        isAdopted: false
    },
    {
        id: 4,
        name: "Thor",
        shdescription: "Grande y protector, pero muy mimoso.",
        description: "Thor es un gato fuerte y tranquilo. Aunque su tamaño impone, es extremadamente cariñoso y le encanta que le rasquen la barriga. Perfecto para hogares sin otros animales.",
        age: 5,
        sex: "macho",
        status: "acogido",
        images: [
            "https://images.unsplash.com/photo-1543852786-1cf6624b9987"
        ],
        priority: "normal",
        isAdopted: false
    },
    {
        id: 5,
        name: "Nala",
        shdescription: "Activa y muy sociable.",
        description: "Nala es una gata joven llena de energía. Le encanta correr y jugar, pero también disfruta momentos de calma junto a sus humanos. Está esterilizada y lista para encontrar su familia definitiva.",
        age: 2,
        sex: "hembra",
        status: "normal",
        images: [
            "https://images.unsplash.com/photo-1533738363-b7f9aef128ce"
        ],
        priority: "alta",
        isAdopted: false
    },
    {
        id: 6,
        name: "Leo",
        shdescription: "Muy tranquilo y acostumbrado a niños.",
        description: "Leo es un gato adulto muy equilibrado. Está acostumbrado a convivir con niños y otros gatos. Es independiente pero disfruta la compañía.",
        age: 6,
        sex: "macho",
        status: "normal",
        images: [
            "https://images.unsplash.com/photo-1507149833265-60c372daea22"
        ],
        priority: "normal",
        isAdopted: true
    }
]

const AnimalCarousel: React.FC = () => {
  const listRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<gsap.core.Tween | null>(null)
  const draggableRef = useRef<any>(null)
  const singleSetWidthRef = useRef(0)
  const proxyRef = useRef<{ x: number }>({ x: 0 })

  useEffect(() => {
    gsap.registerPlugin(Draggable)
    let resizeObserver: ResizeObserver | null = null

    const init = () => {
      const list = listRef.current
      if (!list) return

      const items = list.querySelectorAll<HTMLDivElement>('.item')
      if (!items.length) return

      const itemWidth = items[0].offsetWidth
      const singleSetCount = items.length / 2
      const singleSetWidth = itemWidth * singleSetCount
      singleSetWidthRef.current = singleSetWidth
      if (singleSetWidth === 0) return

      if (animRef.current) {
        animRef.current.kill()
        animRef.current = null
      }
      if (draggableRef.current) {
        draggableRef.current.kill()
        draggableRef.current = null
      }

      proxyRef.current.x = 0

      animRef.current = gsap.to(proxyRef.current, {
        x: -singleSetWidth,
        ease: 'none',
        duration: 20,
        repeat: -1,
        onUpdate: () => {
          const v = proxyRef.current.x
          const mod = ((v % singleSetWidth) + singleSetWidth) % singleSetWidth
          gsap.set(list, { x: mod - singleSetWidth })
        }
      })

      const instances = Draggable.create(list, {
        type: 'x',
        inertia: true,
        onPress() {
          animRef.current?.pause()
        },
        onDrag() {
          proxyRef.current.x = this.x
          gsap.set(list, { x: this.x })
        },
        onThrowUpdate() {
          proxyRef.current.x = this.x
          gsap.set(list, { x: this.x })
        },
        onRelease() {
          const cur = proxyRef.current.x
          const offset = (((-cur % singleSetWidthRef.current) + singleSetWidthRef.current) % singleSetWidthRef.current) / singleSetWidthRef.current
          animRef.current?.progress(offset)
          animRef.current?.play()
        }
      })
      draggableRef.current = instances[0]
    }

    init()

    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => init())
      if (listRef.current) resizeObserver.observe(listRef.current)
    } else {
      window.addEventListener('resize', init)
    }

    return () => {
      animRef.current?.kill()
      animRef.current = null
      draggableRef.current?.kill()
      draggableRef.current = null
      if (resizeObserver && listRef.current) resizeObserver.unobserve(listRef.current)
      window.removeEventListener('resize', init)
    }
  }, [])

  const handleMouseEnter = () => animRef.current?.pause()
  const handleMouseLeave = () => animRef.current?.play()

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="carousel my-10" ref={listRef}>
        {[...data, ...data].map((animal, i) => (
          <div className="item" key={i}>
            <AnimalCarouselCard {...animal} />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  cursor: grab;
  .carousel {
    display: flex;
    width: max-content;
  }
  .item {
    flex: none;
    width: 320px;
    height: 320px;
  }
`

export default AnimalCarousel
