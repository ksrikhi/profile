import '@testing-library/jest-dom'
 
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Education from '../education'
import LearningSkill from '../../component/edu'


test('Education', () => {
    const data = [
        {
            "title": "Technical Training",
            "subtitle": "S S Technology",
            "date": "jan, 2017",
            "details": "working Experience  Web based application with UI components development using of HTML , CSS, Front end framework : Angular ,bootstrap."
        },
        {
            "title": "B.Tech ( C.S.E)",
            "subtitle": "Rayat Bahra Institution",
            "date": "june,2016"
        },
        {
            "title": "Diploma (Computer Engineering)",
            "subtitle": "Rayat Bahra Institution",
            "date": "june,2013"
        }
    ];
    render(<Education  data={data} />)
    expect(screen.getByText(data[0].title)).toBeInTheDocument()
    expect(screen.getAllByTestId('learning-skill').length).toEqual(data.length)
})