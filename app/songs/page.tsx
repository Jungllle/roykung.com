import {Col, Container, Row} from 'react-bootstrap';

const youtubeVideos = [
  {
    title: 'OLIVIA ONG [ 如燕 ] Official Music Video (夏夜晚風Live音樂會)',
    id: 'rnX00KoNf2I',
  },
];

const SongsPage = () => {
  const Playlist = youtubeVideos.map((youtubeVideo) => (
    <Col md={{span: 6, offset: 3}} key={youtubeVideo.id}>
      <iframe
        width="560"
        height="315"
        loading="lazy"
        src={`https://www.youtube.com/embed/${youtubeVideo.id}`}
        title={youtubeVideo.title}
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
