import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching user:", error);
    // You could also check the type of error to determine what response to send
    res.status(500).json({ message: "An error occurred while fetching user data" });
  }
};

export const getDashboardStats = async (req, res) => {

    try {
        // hardcoded values
        const currentMonth = "November";
        const currentYear = 2021;
        const currentDay = "2021-11-15";

        /* Recent Transactions */
        const transactions = await Transaction.find()
            .limit(50)
            .sort({ createdOn: -1 });

        /* Overall Stats */
        const overallStat = await OverallStat.find({ year: currentYear });

        const {
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
        } = overallStat[0];

        const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
            return month === currentMonth;
        });

        const todayStats = overallStat[0].dailyData.find(({ date }) => {
            return date === currentDay;
        });

        res.status(200).json({
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
            thisMonthStats,
            todayStats,
            transactions,
        });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};