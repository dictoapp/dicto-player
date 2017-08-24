import React, {Component} from 'react';

import './Chunk.scss';

import ReactMarkdown from 'react-markdown';
import getContrastYIQ from '../../utils/getContrastYIQ';


function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>;
}

class Chunk extends Component {

  constructor(props) {
    super(props);
    this.getPosition = () => {
      const height = this.element.offsetHeight;
      const top = this.element.offsetTop;
      return {
        height,
        top
      };
    };
  }

  render() {
    const {
      chunk = {},
      onClick,
      onTagQuery,
      id
    } = this.props;
    const onChunkClick = () => onClick(chunk);
    const bindRef = (section) => {
      this.element = section;
    };
    return (
      <section
        className={'dicto-player-Chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' ')}
        onClick={onChunkClick}
        id={id}
        ref={bindRef}>
        <div className="contents-container">
          <ReactMarkdown
            source={chunk.content}
            renderers={{Link: LinkRenderer}} />
        </div>
        {chunk.tags ?
          <div className="tags-container">
            {
            chunk.tags.map((tag, index) => {
              const onTagClick = () => onTagQuery(`${tag.name}`);
              return (
                <span
                  className="tag"
                  key={index}
                  onClick={onTagClick}
                  style={{
                    background: tag.color,
                    color: getContrastYIQ(tag.color)
                  }}>
                  {tag.name} ({tag.category})
                </span>
              );
})
          }
          </div> : null}
      </section>
    );
  }
}
export default Chunk;
