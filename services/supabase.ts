import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://runuwwpwmrjxnlkfjtru.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnV3d3B3bXJqeG5sa2ZqdHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MjYxMTAsImV4cCI6MjAzMTMwMjExMH0.x3VBQlwrXcWPpeL5IX9BNhxLfJ09H_2e9v2ODJO1sW0";

export const supabase = createClient(supabaseUrl, supabaseKey);