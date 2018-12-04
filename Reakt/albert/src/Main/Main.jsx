import React from 'react';
import Deskription from '../Deskription/Deskription';
import Quote from '../Quote/Quote';
import Timeline from '../Timeline/Timeline';
import './Main.css';




const Main = () => {
    return (
       <main id='main'>
       <Deskription/>
       <Quote/>
       <Timeline/>

       <div id="link">
      <a id="tribute-link" href="http://www.shmoop.com/albert-einstein/timeline.html" target="_blank">Full timeline at Shmoop!</a>
    </div>
   
       </main>
    );
};

export default Main;