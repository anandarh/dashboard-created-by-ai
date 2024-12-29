import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Dummy data for charts
const barData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
];

const lineData = [
  { name: "Week 1", users: 400, sales: 240 },
  { name: "Week 2", users: 300, sales: 139 },
  { name: "Week 3", users: 200, sales: 980 },
  { name: "Week 4", users: 278, sales: 390 },
];

const pieData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// Dummy data for table
const tableData = [
  {
    id: 1,
    name: "John Doe",
    status: "Active",
    role: "Admin",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    status: "Away",
    role: "Editor",
    lastActive: "5 hours ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    status: "Active",
    role: "User",
    lastActive: "1 hour ago",
  },
  {
    id: 4,
    name: "Sarah Williams",
    status: "Inactive",
    role: "User",
    lastActive: "1 day ago",
  },
];

const StatCard = ({ title, value, description, color }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      height: "100%",
      background: `linear-gradient(45deg, ${color}40 30%, ${color}20 90%)`,
      borderLeft: `4px solid ${color}`,
    }}
  >
    <Typography variant="h6" color="text.secondary" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h4" component="div" sx={{ mb: 1 }}>
      {value}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

const Dashboard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        pt: 4,
        mt: "64px", // Match AppBar height
        ml: "240px",
        height: "calc(100vh - 64px)", // Viewport height minus AppBar
        overflow: "auto",
        backgroundColor: "#f5f7fa", // Light background for better contrast
      }}
    >
      {/* Stats Cards */}
      <Box sx={{ mb: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Total Users"
              value="2,543"
              description="+12% from last month"
              color="#2196F3"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Revenue"
              value="$45,678"
              description="+8% from last month"
              color="#4CAF50"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Orders"
              value="1,234"
              description="+23% from last month"
              color="#FF9800"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Active Users"
              value="789"
              description="+5% from last month"
              color="#E91E63"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Charts */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, height: "380px" }}>
              <Typography variant="h6" gutterBottom>
                Monthly Revenue
              </Typography>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "380px" }}>
              <Typography variant="h6" gutterBottom>
                Traffic Sources
              </Typography>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3, height: "380px" }}>
              <Typography variant="h6" gutterBottom>
                Weekly Trends
              </Typography>
              <ResponsiveContainer width="100%" height="90%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" />
                  <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Table */}
      <Box sx={{ mb: 4 }}>
        <Grid container>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Recent Users
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Last Active</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>{row.lastActive}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
