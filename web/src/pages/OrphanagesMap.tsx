import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import marker from '../images/map-marker.svg'
import '../styles/pages/orphanages.css'

function OrphanagesMap() {
  return (
    <div id="page-orphanages">

      <aside>
        <header>
          <img src={marker} alt="Happy"/>

          <h2>Escolha uma instituição de ocolhimento infantil no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :\</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>

      </aside>
      
      <Map 
        center={[-27.2143385,-49.649351]}
        zoom={15}
        style={{ width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>

      <Link to="" className="creacte-orphanage">
        <FiPlus size={32} />
      </Link>

    </div>
  );
}

export default OrphanagesMap;