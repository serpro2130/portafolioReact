import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy el <strong>Ingeniero en Informática Héctor Alarcón Guerra </strong> Desarrollador Web en Ecuador,
        ofrezco mis servicios de <strong>programación</strong> y  <strong>desarrollo</strong>  en todo tipo
        de proyectos web.
      </h1>
      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
      </h2>
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}
