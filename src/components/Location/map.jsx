export default function MapLocation({clinic}) {
    return (
        <iframe
        title="Google Maps"
        src= {clinic}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    )
}