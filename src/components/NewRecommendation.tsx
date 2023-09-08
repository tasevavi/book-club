import { ChangeEvent, useState } from 'react'
import Button from './UI/Button'

// TODO: remove any
function NewRecommendation(props: any): JSX.Element {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [checked, setChecked] = useState(false)

    const buttonProps = { classes: {}, type: 'submit', text: 'Add Book' }

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target?.value)
    }

    const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target?.value)
    }

    const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target?.value ? true : false)
    }

    const submitHandler = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const newRecommendation = {
            id: 'TODO',
            by: 'TODO',
            title: title,
            author: author,
            isFree: checked,
        }
        // if send successfully -> reset state
        resetState()
    }

    function resetState(): void {
        setTitle('')
        setAuthor('')
        setChecked(false)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-recommendation-controls">
                    <div className="new-recommendation-controls">
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className="new-recommendation-controls">
                        <label>Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={authorChangeHandler}
                        />
                    </div>
                    <div className="new-recommendation-controls">
                        <label>Is it in Chitanka?</label>
                        <input
                            checked={checked}
                            type="checkbox"
                            onChange={checkboxChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-recommendation-actions">
                    <Button props={buttonProps}></Button>
                </div>
            </form>
        </div>
    )
}

export default NewRecommendation
