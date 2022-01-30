import {Col, Container, Row} from "react-bootstrap"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
const youtubeVideos = [
  {
    title: "OLIVIA ONG [ 如燕 ] Official Music Video (夏夜晚風Live音樂會)",
    id: "rnX00KoNf2I"
  }
]

const SongsPage = () => {
  const Playlist = youtubeVideos.map(youtubeVideo =>
    <Col md={{ span: 4, offset: 4 }}>
      <LiteYouTubeEmbed id={youtubeVideo.id} title={youtubeVideo.title}/>
    </Col>
  )
  return(
    <Row className="mt-5 align-content-center">
      <Container fluid>
        {Playlist}
      </Container>
    </Row>
  )
}

export default SongsPage
