import './App.css'
import Calendar from './components/Calendar'
import RecommendationCard, {
    Recommendation,
} from './components/RecommendationCard'
import Button from './components/UI/Button'

function App() {
    // TODO: here fetch data for recommendations
    const recommendations = [
        {
            id: '1',
            by: 'Vili',
            title: 'Test title',
            author: 'Test author',
            isFree: true,
        },
        {
            id: '2',
            by: 'Vili',
            title: 'Test title22222',
            author: 'Test author22222',
            isFree: false,
        },
    ]
    const buttonProps = { classes: {}, type: 'submit', text: 'Add' }
    return (
        <div className="App">
            <header className="App-header"></header>
            <RecommendationCard recommendation={recommendations[0]} />
            <Calendar date={new Date()}></Calendar>
            <Button btnProps={buttonProps} />
        </div>
    )
}

export default App
