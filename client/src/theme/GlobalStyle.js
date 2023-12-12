export default function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          box-sizing: border-box;
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }
        html{
          background-color: #405277;
        }
        html body{
          background-color: #405277;
        }
        a {
          text-decoration: none;
          color: black;
        }
        html footer{
          background-color: #343a40;
        }
        img, video {
        }
        audio, canvas, embed, iframe, img, object, svg, video {
          
        }
        
        /* ================== */
        /* NextJS */
        /* ================== */
        html {
          position: relative;
          min-height: 100%;
        }
        body,
        #__next {
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
        #__next > * {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
        }
      `}</style>
    )
}