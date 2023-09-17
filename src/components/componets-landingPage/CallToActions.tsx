import React from 'react'
import Project from './Projects'

export const CallToActions: React.FC = () => {
  const projects = [
    {
      name: 'Site Bruna Misleine',
      role: 'Landing Page',
      bio: 'Site institucional para a empresa Bruna Misleine em VueJS.',
      imageUrl:
        'https://live.staticflickr.com/65535/53195203683_c0dd348121_b.jpg',
      websiteUrl: 'https://brunamisleine.com.br/',
      socialMediaUrl: 'https://github.com/henbatista/Villa-Real'
    },
    {
      name: 'Cadastro de Endereço',
      role: 'Web Page',
      bio: 'Projetado para simplificar o gerenciamento de informações de endereços em VueJS.',
      imageUrl:
        'https://live.staticflickr.com/65535/53195048045_e317be1924_h.jpg',
      websiteUrl: 'https://cadastro-de-enderecos.vercel.app/#/',
      socialMediaUrl: 'https://github.com/henbatista/cadastroDeEnderecos'
    },
    {
      name: 'Event Plataform',
      role: 'Web Page',
      bio: 'Plataforma de eventos em React',
      imageUrl:
        'https://live.staticflickr.com/65535/53195231028_595e1c77b7_k.jpg',
      websiteUrl: 'https://event-plataform-blond.vercel.app/',
      socialMediaUrl: 'https://github.com/henbatista/event-plataform'
    },
    {
      name: 'Tabnews',
      role: 'Web Page',
      bio: 'Clone de um site de notícias em React em Construção.',
      imageUrl:
        'https://blog.partners.gympass.com/wp-content/uploads/2017/01/P%C3%A1gina-em-constru%C3%A7%C3%A3o.png',
      websiteUrl: '',
      socialMediaUrl: 'https://github.com/henbatista/clone-tabnews'
    }
  ]

  return (
    <div className="grid gap-10 p-3 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((member, index) => (
        <Project
          key={index}
          name={member.name}
          role={member.role}
          bio={member.bio}
          imageUrl={member.imageUrl}
          websiteUrl={member.websiteUrl}
          socialMediaUrl={member.socialMediaUrl}
        />
      ))}
    </div>
  )
}

export default CallToActions
