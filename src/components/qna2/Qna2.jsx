import React from 'react'

const Qna2 = () => {
  return (
    <div>
       <dt className='borange'>what is props ?</dt>
                <dd>In React, props (short for "properties") are immutable values passed from a parent component to a child component. Props allow you to share data between components, making your application more modular and reusable.
                </dd>
                <dt>Key Characteristics of Props:
                </dt>
                <dd>1. Immutable: Props cannot be changed by the child component.

                </dd>
                <dd> 2. Read-only: Props are passed from parent to child, but not the other way around.
                </dd>
                <dd> 3. Type-checked: React checks prop types to ensure correctness.</dd>
                <dt>Using Props in Components:
                </dt>
                <dd className='bwht'>1. Functional Components: Access props using the props parameter. <br />

                    jsx
                    function Child(props) {"{"} <br />
                    return <p>Hello,    {"{"}props.name   {"}"}</p>
                    {"}"} <br />

                    <b> 1. Class Components: Access props using this.props.</b>

                    jsx <br />
                    class Child extends React.Component {"{"} <br />
                    render()   {"{"} <br />
                    return <p>Hello,    {"{"}this.props.name   {"}"}</p>
                    {"}"} <br />
                    {"}"}
                </dd>
    </div>
  )
}

export default Qna2
