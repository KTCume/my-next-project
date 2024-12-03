"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Menu() {
    const open = () => {
        document.querySelector
    }
    return (
        <div>
        <nav className={styles.nav}>
            <ul className={styles.items}>
                <li>
                    <Link href="/news">ニュース</Link>
                </li>
                <li>
                    <Link href="/member">メンバー</Link>
                </li>
                <li>
                    <Link href="/contact">お問い合わせ</Link>
                </li>
            </ul>
        </nav>
        <button className={styles.button}>
            <Image src="/menu.svg" alt="メニュー" width={24} height={24}/>
        </button>
        </div>
    );
}