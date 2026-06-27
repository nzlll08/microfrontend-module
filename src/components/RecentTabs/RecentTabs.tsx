import React from "react";
import styles from "./RecentTabs.module.css";

/**
 * Represents a single recent tab item.
 */
interface RecentTabItem {
  key: string;
  icon: React.ReactNode;
  label: string;
}

/**
 * Props for the RecentTabs component.
 */
interface RecentTabsProps {
  recentTabs?: RecentTabItem[];

  // Callback triggered when a tab is clicked
  onTabClick?: (tab: RecentTabItem) => void;

  // Message displayed when there are no recent tabs
  emptyMessage?: string;
}

/**
 * RecentTabs component
 *
 * Displays a list of recently accessed tabs or systems.
 * The component is intentionally decoupled from business logic
 * so it can be reused across different micro‑frontends.
 */
const RecentTabs: React.FC<RecentTabsProps> = ({
  recentTabs = [],
  onTabClick,
  emptyMessage = "No recent tabs available.",
}) => {
  return (
    <div className={styles.container}>
      {/* Section title */}
      <div className={styles.title}>Recent Tabs</div>

      {recentTabs.length ? (
        <ul className={styles.list}>
          {recentTabs.map((tab) => (
            <li key={tab.key} className={styles.item}>
              <button
                className={styles.card}
                onClick={() => onTabClick?.(tab)}
              >
                {/* Tab icon */}
                <div className={styles.icon}>{tab.icon}</div>

                {/* Tab label */}
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>{tab.label}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <span className={styles.emptyText}>{emptyMessage}</span>
        </div>
      )}
    </div>
  );
};

export default RecentTabs;
