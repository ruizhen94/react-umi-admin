import styles from './index.less';

const LoginPage = ()=> {
  const userName = 'Hello, World!';
  const changeUserName = function(){
    console.log("aaaaaa")
  }
  return (
    <div className={styles.page}>
      <div className={styles.registerWrap}>
          <div className={styles.emailLabel}>Enter your email*</div>
          <div>
            <input type="text" value={userName} onChange={changeUserName}/>
          </div>
      </div>
    </div>
  );
}

export default LoginPage