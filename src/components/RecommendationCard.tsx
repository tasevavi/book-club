import './RecommendationCard.css'

// TODO: use the same for the form recommendation and move to a common types file
export type Recommendation = {
    id: string
    by: string
    title: string
    author: string
    isFree: boolean
}

function RecommendationCard(props: {
    recommendation: Recommendation
}): JSX.Element {
    return (
        <div className="recommendation-card-container">
            <div>
                <img
                    src="logo192.png"
                    alt="profile-pic"
                    className="img rounded-circle"
                />
            </div>
            <div id="title">Title: {props.recommendation.title} </div>
            <div id="author">Author: {props.recommendation.author} </div>
            <div id="isFree">
                Is on Chitanka?
                <input
                    type="checkbox"
                    defaultChecked={props.recommendation.isFree}
                ></input>
            </div>
        </div>
    )
}

export default RecommendationCard
