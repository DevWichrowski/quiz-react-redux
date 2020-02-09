export const quizQuestions = [
    {
        id: 1,
        content: "What function allows you to render React content in an HTML page?",
        answers: [
            {variant: 'a', label: 'ReactDOM.start()'},
            {variant: 'b', label: 'React.render()'},
            {variant: 'c', label: 'ReactDOM.render()'},
            {variant: 'd', label: 'React.mount()'},
        ],
        correctAnswer: "b"
    },
    {
        id: 2,
        content: "Which of the following is NOT a React Component lifecycle method?",
        answers: [
            {variant: 'a', label: 'ComponentDidMount'},
            {variant: 'b', label: 'componentDidUpdate'},
            {variant: 'c', label: 'ComponentWillRender'},
        ],
        correctAnswer: "c"
    },
    {
        id: 3,
        content: "What does it mean that reducers in Redux are 'pure' functions?",
        answers: [
            {variant: 'a', label: 'It means that they only take one argument and return one argument'},
            {
                variant: 'b',
                label: 'It means that they always return the same value given the same arguments, and never produce side effects'
            },
            {variant: 'c', label: 'It means that their prototype is null'},
            {variant: 'd', label: 'What\'s a pure function?'},
        ],
        correctAnswer: "b"
    },
    {
        id: 4,
        content: "What is a stateless functional component in React?",
        answers: [
            {variant: 'a', label: 'A component written as a function that simply takes props and returns UI'},
            {variant: 'b', label: 'A component in which this.state is equal to undefined'},
            {variant: 'c', label: 'A component that is not connected to any other components'},
            {variant: 'd', label: 'All React components are stateless functional components!'},
        ],
        correctAnswer: "a"
    },
    {
        id: 5,
        content: "What is the equivalent of the following React code in JSX? React.createElement(div, {style: color: red}, title=block)",
        answers: [
            {variant: 'a', label: '<div style="color:red;">title="block"</div>'},
            {variant: 'b', label: '<div style="color: red;" title="block"></div>'},
            {variant: 'c', label: '<div>title="block"</div>'},
            {variant: 'd', label: 'The function call is invalid'}
        ],
        correctAnswer: "a"
    },
    {
        id: 6,
        content: "When using Redux for a single-page React app, how do you connect your Redux store to your react component?",
        answers: [
            {variant: 'a', label: 'this.props.childs'},
            {variant: 'b', label: 'this.children'},
            {variant: 'c', label: 'this.props.children'},
            {variant: 'd', label: 'None of these answers'},
        ],
        correctAnswer: "d"
    },
    {
        id: 7,
        content: "What function from below gets called before the others in the life cycle of a component?",
        answers: [
            {variant: 'a', label: 'render'},
            {variant: 'b', label: 'getSnapshotBeforeUpdate'},
            {variant: 'c', label: 'componentDidMount'},
            {variant: 'd', label: 'getDerivedStateFromProps'},
        ],
        correctAnswer: "c"
    },
    {
        id: 8,
        content: "What tool allows you to test React apps?",
        answers: [
            {variant: 'a', label: 'Prettier'},
            {variant: 'b', label: 'Flow'},
            {variant: 'c', label: 'Jest'},
            {variant: 'd', label: 'Yarn'},
        ],
        correctAnswer: "c"
    },
    {
        id: 9,
        content: "What is the components's life cycle in React?",
        answers: [
            {variant: 'a', label: 'Initializing -> Rendering -> Destroying'},
            {variant: 'b', label: 'Rendering -> Unmounting'},
            {variant: 'c', label: 'Mounting -> Unmounting'},
            {variant: 'd', label: 'Mounting -> Updating -> Unmounting'},
        ],
        correctAnswer: "d"
    },
    {
        id: 10,
        content: "What is Snapshot Testing used for in React?",
        answers: [
            {variant: 'a', label: 'To test if API calls are correct'},
            {variant: 'b', label: 'To take picture of the interface to view the CSS regressions'},
            {variant: 'c', label: 'To automate component rendering tests'},
            {variant: 'd', label: 'To test the validity of the state of React components'},
        ],
        correctAnswer: "c"
    }
];
