// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as sessionOperations from '../../redux/session/sessionOperations';
// import Form from '../shared/Form';
// import Button from '../shared/Button';
// import Input from '../shared/Input';
// import Label from '../shared/Label';
// import styles from './signUpForm.module.css';

// class SignUpForm extends Component {
//   state = { name: '', email: '', password: '' };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSingup({ ...this.state });
//     this.setState({
//       name: '',
//       email: '',
//       password: '',
//     });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <div>
//         <Form className={styles.form} onSubmit={this.handleSubmit}>
//           <Label>
//             Name
//             <Input
//               type="name"
//               value={name}
//               onChange={this.handleChange}
//               name="name"
//             />
//           </Label>
//           <Label>
//             Email
//             <Input
//               type="email"
//               value={email}
//               onChange={this.handleChange}
//               name="email"
//             />
//           </Label>
//           <Label>
//             Password
//             <Input
//               type="password"
//               value={password}
//               onChange={this.handleChange}
//               name="password"
//             />
//           </Label>
//           <Label>
//             <Button label="Log In" type="submit" />
//           </Label>
//         </Form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onSingup: sessionOperations.signup,
// };

// export default connect(null, mapDispatchToProps)(SignUpForm);
