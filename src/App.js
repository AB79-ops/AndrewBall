import React from 'react';
import './App.css';
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import MainContent from "./Components/MainContent";
import Projects from "./Components/Projects";
import ProjectsData from "./data/ProjectsData";
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends React.Component {

    render() {
        const projectComponents = ProjectsData.map(item => <Projects key={item.id} item={item} project={item}/>);

        return (
            <div className="App">
                <Navigation/>
                <Header/>
                <MainContent/>
                <br/>
                <br/>
                <br/>
                <h1 className="pro-pro">PROJECTS</h1>
                <div className="products-list">
                    {projectComponents}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
