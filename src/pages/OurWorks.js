import React, { Component } from 'react'
import Wave from '../components/Wave'
import Card from '../components/Card'
import styled from 'styled-components'

export default class OurWorks extends Component {
    render() {
        const WaveBottom = styled.div`
        position: absolute;
        width: 100%;
        bottom: 520px;
   
`

        const WaveTop = styled.div`
        position: absolute;
        width: 100%;
        bottom: -300px;
        z-index:100;
        transform: rotate(180deg)

`
        return (
            <div>
                <div className="OurWorks">
                    <div className="OurWorksGroup">
                        <div>
                            <h1>أعمالنا</h1>
                            <p>
                                ستجد المتعة والجمال والأناقة بين يدينا،<br /> هنا حيث الطبيعة الخلابة لن تجد سواها
                        </p>
                        </div>
                    </div>

                </div>
                <WaveBottom><Wave /></WaveBottom>

                <div className="Cards">
                    <h2>نحن نقدم الخبرة والتجربة</h2>
                    <div className="CardGroup">
                        <Card
                            title="الحياة حلوة بس نفهمها"
                            text="12 قصة ناجحة"
                            image={require('../images/wallpaper5.jpeg')}
                        />
                        <Card
                            title="عثرات في طريق مظلم"
                            text="53 قصة ناجحة"
                            image={require('../images/wallpaper2.jpg')}
                        />
                        <Card
                            title="غموض يجتاح المكان"
                            text="6 قصة ناجحة"
                            image={require('../images/wallpaper3.jpg')}
                        />
                        <Card
                            title="درجات على سلم التفوق"
                            text="34 قصة ناجحة"
                            image={require('../images/wallpaper4.jpg')}
                        />
                        <Card
                            title="درجات على سلم التفوق"
                            text="34 قصة ناجحة"
                            image={require('../images/wallpaper2.jpg')}
                        />
                        <Card
                            title="درجات على سلم التفوق"
                            text="34 قصة ناجحة"
                            image={require('../images/wallpaper.jpg')}
                        />
                    </div>
                </div>
          
                <div className="OurWorks2">
                    <div className="OurWorksGroup">
                        <div>
                            <h1>نحو السحاب ننطلق</h1>
                            <p>
                                ستجد المتعة والجمال والأناقة بين يدينا،<br /> هنا حيث الطبيعة الخلابة لن تجد سواها
                        </p>
                        </div>
                    </div>

                </div>
                <WaveBottom><Wave /></WaveBottom>
            </div>
        )
    }
}


