import css from "./Taro.module.css"; 
export default function Taro({
  name,
  id,
  suite,
  description,
  interpretation,
  imageUrl 
}) {
  return (
    <div className={css.cardContainer}>
      <h2 className={css.itemTitle}>{name} (№{id})</h2>
      
      {/* Якщо у тебе будуть зображення карт */}
      {imageUrl && <img className={css.itemImage}
       src={imageUrl} alt={name} />}
      
      {/* <p><strong>Символіка:</strong> {suite}</p> */}
      
      {/* <div style={{ color: "#ffffff" }}>
        <p><strong>Опис:</strong> {description}</p>
      </div> */}
      
      <>
        <p className={css.itemInter}><strong>Інтерпретація:</strong> {interpretation}</p>
      </>
    
      <br />
      <button className={css.itemButton}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#d4af37';
    e.target.style.color = '#000';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#d4af37';
  }}
>
  Обрати карту
</button>
    </div> 
  );
}