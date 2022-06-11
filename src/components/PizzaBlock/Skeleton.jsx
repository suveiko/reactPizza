import ContentLoader from "react-content-loader"

export const Skeleton = () => (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="128" cy="137" r="123" />
            <rect x="0" y="276" rx="19" ry="19" width="280" height="27" />
            <rect x="0" y="318" rx="11" ry="11" width="280" height="88" />
            <rect x="60" y="455" rx="0" ry="0" width="1" height="0" />
            <rect x="114" y="419" rx="25" ry="25" width="167" height="45" />
            <rect x="0" y="424" rx="14" ry="14" width="89" height="30" />
        </ContentLoader>
)
