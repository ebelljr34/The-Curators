import React, { Component } from 'react';
import Project from '../components/Project';
import Banner from '../components/Banner';
import "../styles/Gallery.css";

class Gallery extends Component {
    constructor(props) {
        super(props)
        /* TODO: See "Rendering Dynamic Data" at https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react

        Fetch the list from the backend and set the projects list.
        */
        this.state = {
            projects: [
                { title: 'Food Waste Management - Data Analysis Report', author: 'Jessica De Mota Munoz', image: 'images/Food_waste_tkh 2.png', link: 'https://github.com/JessicaDeMota/food_waste_management/blob/main/Data%20Analyst%20Report%20.ipynb' },
                { title: 'AirBnb Data Analysis', author: 'Clariza Mayo, Stanislava Hristova, Janet Perez', image: 'images/AirBnb_tkh.png', link: 'https://github.com/clarizamayo/Airbnb_Data_Analysis' },
                { title: 'Covid Relief ', author: 'Clariza Mayo, Juan Peralta, Stanislava Hristova, Kari Sakib', image: 'images/Covid_Relief_tkh 2.png', link: 'https://www.figma.com/file/pM847kKu3ZWcQGmX5BNVWS/Covid-Relief-Wireframe-and-UML?node-id=1%3A5734' },
                { title: 'Munch Map', author: 'Angel B.Fernández, Shafee Ahmed', image: 'images / Munch_Map_tkh 2.png', link: 'http://munchmap.netlify.app/' },
                { title: 'Bloom', author: 'Quiana Berry, Angel B. Fernández, David Espinal', image: 'images/Bloom_tkh.png', link: 'http://bloom-jobs.netlify.app/' },
                { title: 'Treasury Yield Project', author: 'Gyasi Sturgis', image: 'images/Treasury_Yield_tkh 2.png', link: 'https://github.com/Gsturgis/TreasuryYield_Project' },
                { title: 'NBA Player Stats Explorer', author: 'Bryant Novas', image: 'images/NBA_Player_Stats_tkh 2.png', link: 'https://nba-player-stats-explorer.herokuapp.com/' },
                { title: 'Garamcha ', author: 'Shafee Ahmed, Ayman Omer', image: 'images/Garamcha_tkh 2.png', link: 'https://garamchaproject.netlify.app/' },
                { title: 'Free The Homies', author: 'Elston Bell Jr.', image: 'images/Free_the_homies_tkh 2.png', link: 'https://freethehomies.herokuapp.com/' },
                { title: 'Checkster - Citi Hackathon', author: 'Leesel Fraser, Jahaziel Israel, Shafee Ahmed, Ayman Omer, Julian Quezada', image: 'images/Checkster_Tkh 2.png', link: 'https://www.youtube.com/watch?v=Rl_XcR0Jk4U&t=124s' },
                { title: 'Yumzie', author: 'Stephanie A. Peña, Jahaziel Israel', image: 'images/Yumzie_tkh 2.png', link: 'https://yumzie.netlify.app/' },
                { title: 'Okcupid Data Analyis ', author: 'Chioma Dunkley', image: 'images/Okcupid_tkh 2.png', link: 'https://github.com/ChiCodes2020/OkCupid_Data_Analysis/blob/master/Okcupid_data_phase2.ipynb' },
                { title: 'Flixador', author: 'Katherine Fernandez, Stephanie A. Peña, Leesel Fraser, Ayman Omer', image: 'images/Flixador_tkh.png', link: 'https://github.com/stephp23/flixador-react-native-app' },
                { title: 'Tsundoku (積ん読)', author: 'Diana Gaona, Shan Siddiqui, Shafee Ahmed, Jahaziel Israel  ', image: 'images/Tsundoku_tkh 2.png', link: 'https://github.com/dianacg93/tsundoku-rn' },
            ]
        }
    }

    render() {
        let projectList = []
        this.state.projects.forEach(project => {
            projectList.push(<li class="flex-item">
                <a href={project.link}>
                    <Project
                        title={project.title}
                        author={project.author}
                        image={project.image}
                    >
                    </Project></a></li>)
        })

        return (
            <div className="root">
                <Banner
                    text="The Knowledge House"
                />
                <h1> Gallery </h1>
                <ul class="flex-container">
                    {projectList}
                </ul>
            </div>
        )
    }
}

export default Gallery;