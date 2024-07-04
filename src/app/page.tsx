
import Banner from '@/components/Banner'
import Footer from '@/components/Layout/footer'
import Certificados from '@/components/certificados'
import Contato from '@/components/contato'
import Projetos from '@/components/projetos'
import Sobre from '@/components/sobre'



export default function Home() {
  return (
    <div>
      <Banner />
      <Sobre />
      <Certificados />
      <Contato />
      <Projetos />
      <Footer />
    </div>
  )
}
