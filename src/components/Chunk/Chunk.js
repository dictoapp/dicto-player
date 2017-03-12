import React, {Component} from 'react';

import './Chunk.scss';

import ReactMarkdown from 'react-markdown';
import getContrastYIQ from '../../utils/getContrastYIQ';

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
      onClick
    } = this.props;
    const onChunkClick = () => onClick(chunk);
    const bindRef = (section) => {
      this.element = section;
    };
    return (
      <section
        className={'dicto-player-Chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' ')}
        onClick={onChunkClick}
        ref={bindRef}>
        <div className="contents-container">
          <ReactMarkdown source={chunk.content} />
        </div>
        {chunk.tags ?
          <div className="tags-container">
            {
            chunk.tags.map((tag, index) => (
              <span
                className="tag"
                key={index}
                style={{
                  background: tag.color,
                  color: getContrastYIQ(tag.color)
                }}>
                {tag.name} ({tag.category})
              </span>
            ))
          }
          </div> : null}
      </section>
    );
  }
}

// const Chunk = ({
//   chunk = {},
//   onClick
// }) => {
//   const onChunkClick = () => onClick(chunk);
//   return (
//     <section
//       className={'dicto-player-Chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' ')}
//       onClick={onChunkClick}>
//       <div className="contents-container">
//         <ReactMarkdown source={chunk.content} />
//       </div>
//       {chunk.tags ?
//         <div className="tags-container">
//           {
//           chunk.tags.map((tag, index) => (
//             <span
//               className="tag"
//               key={index}
//               style={{
//                 background: tag.color,
//                 color: getContrastYIQ(tag.color)
//               }}>
//               {tag.name} ({tag.category})
//             </span>
//           ))
//         }
//         </div> : null}
//     </section>
//   );
// };

export default Chunk;
