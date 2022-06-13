import './AddQuestions.css';

const AddQuestions = () => {

    return(
        <section id="create-page" className="create">
        <form id="create-form" method="POST">
            <fieldset>
                <legend>Add Questions</legend>
                <p className="field">
                    <label htmlFor="name">Type</label>
                    <span className="input">
                        <input type="text" name="type" id="type" placeholder="Type" />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image" />
                    </span>
                </p>
                <input className="button submit" type="submit" value="Add Question" />
            </fieldset>
        </form>
    </section>
    );
}

export default AddQuestions;