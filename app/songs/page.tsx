import {Col, Container, Row} from 'react-bootstrap';

const youtubeVideos = [
  {
    title: 'OLIVIA ONG [ 如燕 ] Official Music Video (夏夜晚風Live音樂會)',
    id: 'rnX00KoNf2I',
  },
];

const SongsPage = () => {
  const Playlist = youtubeVideos.map((youtubeVideo) => (
    <Col md={{span: 4, offset: 4}} key={youtubeVideo.id}>
      <iframe
        src={`https://www.youtube.com/watch?v=${youtubeVideo.id}`}
        allowFullScreen
      />
    </Col>
  ));
  return (
    <Row className='mt-5 align-content-center'>
      <Container fluid>{Playlist}</Container>
    </Row>
  );
};

export default SongsPage;
