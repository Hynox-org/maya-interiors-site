interface GoogleMapProps {
  embedUrl: string
  height?: string
}

export default function GoogleMap({ embedUrl, height = "450px" }: GoogleMapProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  )
}
