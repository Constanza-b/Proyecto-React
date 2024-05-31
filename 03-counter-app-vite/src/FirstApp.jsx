// export const FirstApp = () => {
//     return <h1>Hola Cami!!</h1>
// }

// const newMessage = {
//   message: "Buenos días Cami",
//   title: "Cami te amo mucho!",
// };

import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {
   
    // console.log(props);
  
    //const suma = (a,b) => a + b;

    return ( 
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{suma(1,6)}</code> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired, 
    subTitle: PropTypes.string.isRequired 
}

FirstApp.defaultProps = {
    // title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Constanza Becerra'
}