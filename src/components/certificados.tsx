import Card from "./Layout/card"
import SectionName from "./Layout/sectionName"

const certificados = [
    {
        title: "Certificado de técnico em informática para internet",
        image: "/certificados/infoweb.png",
        descriptionModal: "Certificado de conclusão do curso técnico integrado em informática para internet, com carga horária de 3995 horas.",
        tags: ["IFRN", "Técnico", "Informática", "Internet", "3995 horas"],
        link: "https://suap.ifrn.edu.br/media/diplomas_eletronicos/25a36806b83a11edb6170242c612fc82-temph25ENezH9Epm.pdf"
    }
]

export default function Certificados() {
    return(
        <div className="my-12 ">
            <SectionName name="Certificados"  href="Academic" id="Academic"/>

            <div className="flex flex-wrap justify-center  gap-2 mt-6 mx-2">
                {certificados.map((certificado, index) => (
                    <Card 
                        key={index}
                        title={certificado.title}
                        image={certificado.image}
                        descriptionModal={certificado.descriptionModal}
                        tags={certificado.tags}
                        link={certificado.link}
                        buttonText="Abrir certificado"
                    />
                ))}
                
            </div>
                
        </div>
        
    )
}