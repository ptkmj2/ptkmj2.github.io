import Image from "next/image";
import styles from "./page.module.css";
import { logo } from '../../public/kmj.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <main class="m-auto">
        <form>
            <Image
              src="http://150.107.248.59/kis/assets/images/kmj.png"
              width={300}
              height={300}
              layout="responsive"
              className="mb-3"
            />
            <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
            
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>

            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
      </main>
    </main>
  );
}
