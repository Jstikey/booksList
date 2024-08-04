import { people } from "./firstComponent";

export const FetchData = () => {
  return (
    <>
      {people.map((person) => (
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "0.5rem",
            marginBottom: "1rem",
          }}
          key={person.id}
        >
          <h2>{person.name}</h2>
          {person.images?.map((img) => (
            <img
              style={{ width: "120px", height: "150px", objectFit: "cover" }}
              src={img.small.url}
              alt=""
            />
          ))}
          <h4>{person.nickName}</h4>
        </div>
      ))}
    </>
  );
};
