import Card from '../components/context'

export default function Home(){
  return (
    <Card
      txtcolor="secondary"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      body={(<img src="./bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}



