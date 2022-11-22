import { useEffect, useState } from "react";
import styles from "./List.module.css";

export const List = () => {
  const [list, setList] = useState<string[]>([]);

  const fetchList = async () => {
    const response = await fetch("/api/list-items");
    const data = await response.json();
    setList(data.list);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
