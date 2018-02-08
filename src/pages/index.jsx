import React from 'react';
import Helmet from 'react-helmet';

function Index() {
  return (
    <div>
      <Helmet>
        <title>Praxis - Big Data Analytics</title>
      </Helmet>
      <h2>Big Data Analytics</h2>
      <hr/>
      <p>
        {
          'Site donde se concetra la información referente al plan de capacitación de la especialidad Big Data Analytics'
        }
      </p>
      <p>Tópicos principales</p>
        <ul>
          <li>Arquitectura Sistemas Operativos Linux</li>
          <li>Arquitectura de Base de Datos</li>
          <li>Minería de Datos</li>
          <li>Procesamiento - Analítica</li>
        </ul>
    </div>
  );
}

Index.displayName = 'IndexPage';

export default Index;
