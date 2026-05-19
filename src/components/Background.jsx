const BG_URL = '/assets/forest-bg.jpg';

const Background = () => {
    return (
        <div
            className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover opacity-50 pointer-events-none"
            style={{
                backgroundImage: `url(${BG_URL})`,
                backgroundAttachment: 'scroll'
            }}
        />
    );
};

export default Background;