import React from 'react';
import Head from 'next/head';
import Card from './Card';



export default() => {
    return (
        <div className="App">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/static/base.css"/>
                <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
            </Head>
            <header className="App-header">
                <h1>Hola, esta aplicación se renderiza desde el servidor</h1>
                <h2>Tu ordenador es por tanto liberado del peso del hardware</h2>
            </header>
            <div className="Grid">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};