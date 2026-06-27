import React from "react";
import { Badge } from "antd";
import styles from "./SystemList.module.css";
import { KeyOutlined } from "@ant-design/icons";

/**
 * Represents a system entity available for selection.
 */
interface System {
  id: number;
  name: string;
  fa_Name: string;
  link: string;
  is_Two_Step_Login?: boolean;
}

/**
 * Props for the SystemList component.
 */
interface Props {637261
  data?: System[];
  source_ID?: number;
  // Callback function to handle system selection, promoting component reusability.
  onSystemSelect?: (system: System) => void; 
}

/**
 * SystemList component displays a list of systems.
 * It is decoupled from business logic to maintain architectural cleaness.
 */
const SystemList: React.FC<Props> = ({ data, source_ID, onSystemSelect }) => {
  
  // Handles the click event and delegates the action to the parent container.
  const handleSystemClick = (system: System) => {
    if (onSystemSelect) {
      onSystemSelect(system);
    }
  };

  return (
    <div className={styles.systemsContainer}>
      <div className={styles.systems}>
        {data && data.length > 0 ? (
          data.map((system) => (
            <div
              key={system.id}
              className={styles.systemItem}
              onClick={() => handleSystemClick(system)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              {/* Display a key icon if the system requires two-step authentication */}
              {system.is_Two_Step_Login && (
                <div style={{ position: "absolute", top: 5, right: 5 }}>
                  <KeyOutlined style={{ color: "#f0ad4e", fontSize: "16px" }} />
                </div>
              )}

              {/* Show an active badge if the system matches the current source_ID */}
              <div className={styles.activeSystem}>
                {system.id === source_ID ? <Badge size="small" status="processing" color="#20BF6B" /> : null}
              </div>
              
              <div className={styles.icon}></div>
              
              <div className={styles.info}>
                <h3 className={styles.fa}>{system.fa_Name}</h3>
                <span className={styles.en}>{system.name}</span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#b6b6b6" }}>No systems available.</p>
        )}
      </div>
    </div>
  );
};

export default SystemList;
