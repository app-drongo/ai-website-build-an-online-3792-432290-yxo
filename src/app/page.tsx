import Hero from '@/components/sections/home/Hero'
import Productgrid from '@/components/sections/home/Productgrid'
import About from '@/components/sections/home/About'
import Contact from '@/components/sections/home/Contact'
import Cart from '@/components/sections/home/Cart'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="product-grid">
        <Productgrid />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="cart">
        <Cart />
      </section>
    </>
  )
}