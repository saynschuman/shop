import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, loadArticles } from '../AC';

class Index extends React.Component {
  componentDidMount() {
    const { loadArticles } = this.props;
    loadArticles();
  }
  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
        <br />
        <h2>Articles</h2>
        <div>
          {this.props.isLoading &&
            !this.props.isLoaded && (
              <img
                style={{ width: 200 }}
                src="/static/img/loader.gif"
                alt=""
              />
            )}
          {this.props.isLoaded &&
            this.props.textError.length < 1 && (
              <div>
                {this.props.data.map(i => (
                  <div key={i.show.id}>{i.show.name}</div>
                ))}
              </div>
            )}
          {this.props.textError.length > 0 && (
            <div className={'error-message'}>Ошибка сервера...</div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      data: state.property.results,
      isLoading: state.property.isLoading,
      isLoaded: state.property.isLoaded,
      textError: state.property.textError,
      counter: state.counter.count,
    };
  },
  { increment, decrement, loadArticles },
)(Index);
