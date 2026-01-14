import { motion } from 'framer-motion';

const deviceIcons = {
  router: '🌐',
  switch: '🔀',
  pc: '💻',
  server: '🖥️',
  laptop: '💻',
  printer: '🖨️',
  cloud: '☁️',
  firewall: '🛡️'
};

export function Device({ type, label, ip, vlan, x, y, onClick, highlighted }) {
  return (
    <motion.div
      className={`device ${highlighted ? 'highlighted' : ''}`}
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <div className={`device-icon ${type}`}>
        {deviceIcons[type] || '📦'}
      </div>
      <div className="device-info">
        <span className="device-label">{label}</span>
        {ip && <span className="device-ip">{ip}</span>}
        {vlan && <span className="device-vlan">VLAN {vlan}</span>}
      </div>

      <style>{`
        .device {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        .device.highlighted .device-icon {
          box-shadow: 0 0 0 4px var(--primary), 0 0 20px rgba(37, 99, 235, 0.4);
        }

        .device-icon {
          width: 60px;
          height: 60px;
          background: white;
          border: 2px solid var(--gray-300);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }

        .device-icon.router {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          border-color: var(--primary);
        }

        .device-icon.switch {
          background: linear-gradient(135deg, #d1fae5, #a7f3d0);
          border-color: var(--success);
        }

        .device-icon.server {
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
          border-color: #ec4899;
        }

        .device-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.125rem;
        }

        .device-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--gray-700);
          white-space: nowrap;
        }

        .device-ip {
          font-size: 0.7rem;
          font-family: 'Fira Code', monospace;
          color: var(--gray-500);
        }

        .device-vlan {
          font-size: 0.65rem;
          background: var(--primary);
          color: white;
          padding: 0.125rem 0.375rem;
          border-radius: 10px;
        }
      `}</style>
    </motion.div>
  );
}

export function Connection({ from, to, color = 'var(--gray-300)', dashed = false, label }) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  return (
    <svg className="connection" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={color}
        strokeWidth="3"
        strokeDasharray={dashed ? '8,4' : 'none'}
      />
      {label && (
        <text
          x={midX}
          y={midY - 10}
          textAnchor="middle"
          fill="var(--gray-600)"
          fontSize="12"
          fontWeight="500"
        >
          {label}
        </text>
      )}
    </svg>
  );
}

export function NetworkDiagram({ children, title, height = 400 }) {
  return (
    <div className="network-diagram-wrapper">
      {title && <h4 className="diagram-title">{title}</h4>}
      <div className="network-diagram" style={{ height }}>
        {children}
      </div>

      <style>{`
        .network-diagram-wrapper {
          margin: 1.5rem 0;
        }

        .diagram-title {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }

        .network-diagram {
          background: var(--gray-50);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export function VlanZone({ x, y, width, height, vlanId, color, label }) {
  return (
    <motion.div
      className="vlan-zone"
      style={{
        left: x,
        top: y,
        width,
        height,
        backgroundColor: `${color}20`,
        borderColor: color
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <span className="vlan-label" style={{ backgroundColor: color }}>
        VLAN {vlanId}: {label}
      </span>

      <style>{`
        .vlan-zone {
          position: absolute;
          border: 2px dashed;
          border-radius: var(--radius-md);
        }

        .vlan-label {
          position: absolute;
          top: -12px;
          left: 12px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </motion.div>
  );
}

export function AnimatedPacket({ path, color = 'var(--primary)', duration = 2, delay = 0 }) {
  const points = path.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 20 }}>
      <motion.circle
        r="8"
        fill={color}
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay: 1,
          ease: 'linear'
        }}
        style={{
          offsetPath: `path('M ${path.map(p => `${p.x} ${p.y}`).join(' L ')}')`,
        }}
      />
    </svg>
  );
}

export default NetworkDiagram;
