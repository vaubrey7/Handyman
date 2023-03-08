function Handyman() {
    const [services, setServices] = useState(AbujaServices);
  
    return (
      <div>
        <header>
          <h1>Handyman</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="/handyman-login">Handyman Login</a></li>
              <li><a href="/customer-login">Customer Login</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Services Available in Abuja</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <h3>{service.title}</h3>
                <img src={service.imageUrl} alt={service.title} />
                <p>{service.description}</p>
                <p>{service.price}</p>
                <button>Add to Cart</button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
  
  function HandymanLogin({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function handlePasswordChange(event) {
      setPassword(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      // Perform login logic here
      if (email === 'handyman@example.com' && password === 'password') {
        onLogin('handyman');
      } else {
        alert('Invalid email or password');
      }
    }
  
    return (
      <div>
        <h1>Handyman Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  function CustomerLogin({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function handlePasswordChange(event)
  }