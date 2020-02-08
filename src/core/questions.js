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
        content: "How can you change a name property inside a React.Component Class component?",
        answers: [
            {variant: 'a', label: 'props[name] = new name'},
            {variant: 'b', label: 'this.props.name = new name'},
            {variant: 'c', label: 'You cannot do that because the properties of a component are read-only'},
        ],
        correctAnswer: "a"
    },
    {
        id: 3,
        content: "How can you access the state of a component from inside of a member function?",
        answers: [
            {variant: 'a', label: 'this.getState()'},
            {variant: 'b', label: 'this.prototype.stateValue'},
            {variant: 'c', label: 'this.state'},
            {variant: 'd', label: 'this.values'},
        ],
        correctAnswer: "a"
    },
    {
        id: 4,
        content: "What kind of error types are not caught by Error Boundaries?",
        answers: [
            {variant: 'a', label: 'Lifecycle methods'},
            {variant: 'b', label: 'Rendering errors'},
            {variant: 'c', label: 'Event handlers'},
            {variant: 'd', label: 'Constructor errors'},
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
        content: "With what property can you access children from a component?",
        answers: [
            {variant: 'a', label: 'this.props.childs'},
            {variant: 'b', label: 'this.children'},
            {variant: 'c', label: 'this.props.children'},
            {variant: 'd', label: 'None of these answers'},
        ],
        correctAnswer: "a"
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
        correctAnswer: "a"
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
        correctAnswer: "a"
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
        correctAnswer: "a"
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
        correctAnswer: "a"
    }
];
