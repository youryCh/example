import ErrorPage from 'layout/ErrorPage';
import {Component, ErrorInfo, PropsWithChildren} from 'react';

interface IState {
  error: Error;
}

const INITIAL_STATE: IState = {error: null};

export class ErrorBoundary extends Component<PropsWithChildren, IState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = INITIAL_STATE;
  }

  static getDerivedStateFromError(error: Error) {
    return error;
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    const {error: {message, name}} = this.state;

    return this.state.error
      ? <ErrorPage description={message} status={name} />
      : this.props.children;
  }
}
