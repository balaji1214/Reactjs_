//packages to be imported
class HelloReactjs extends React.Component
{
   // constructor(props)
    //{
      //  super(props);
        render()
        {
            return(
                <div>
                hello reactjs class
                </div>
            );
        }
    //}
}
ReactDOM.render(<HelloReactjs/>,document.body)//directly rendering to html body
