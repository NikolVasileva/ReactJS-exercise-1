export default function Movie(props) {
    return (
        <div className="movie_card" >
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={props.posterUrl} />
                    <h1>{props.title}</h1>
                    <h4>{props.year}, {props.director}</h4>
                    <span className="minutes">{props.runtime} min</span>
                    <p className="type">{Array.isArray(props.genres) ? props.genres.join(", ") : props.genres}</p>

                </div>
                <div className="movie_desc">
                    <p className="text">
                        {props.plot}
                    </p>
                </div>
            </div>
            <div className="blur_back bright_back"></div>
        </div>
    );
} 