import styles from './TextInput.module.css';

export default function TextInput(props) {
  return (
    <div>
      <textarea
        className={styles.input}
        {...props}
      />
    </div>
  );
}